"use server";

import { signIn, signOut } from "@/auth";
import { db } from "../db";
import type { User } from "@prisma/client";
import { AuthError } from "next-auth";
import { z } from "zod";
import bcryptjs from "bcryptjs";
import { redirect } from "next/navigation";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

const signUpSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(3).max(255),
});

interface SignUpFormState {
  errors: {
    name?: string[];
    email?: string[];
    password?: string[];
    _form?: string[];
  };
}

export async function signUp(
  formState: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> {
  const result = signUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const isEmailExists = await findUserByEmail(result.data.email);

  if (isEmailExists) {
    return {
      errors: {
        email: ["Email already exists"],
      },
    };
  }

  const hashed = await generatePasswordHash(result.data.password);

  let user: User;
  try {
    // create user data
    user = await db.user.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        password: hashed,
      },
    });
  } catch (error: unknown) {
    // Handling database creation errors
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  redirect("/login");
}

export async function logout() {
  return await signOut();
}

export const findUserByEmail = async (email: string) => {
  return await db.user.findFirst({
    where: {
      email,
    },
  });
};

const generatePasswordHash = async (password: string) => {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
};
