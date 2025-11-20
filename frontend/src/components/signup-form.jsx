import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import api from "@/lib/api";


export function SignupForm({
  ...props
}) {
const [form, setForm] = useState({
  email: "",
  password: "",
  name: "",
  confirmPassword: "",
  phone: "",
});
const onSubmit = async (e) => {
  e.preventDefault();
  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  try {
    await api.register(form);
    setForm({
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
      phone: "",
    });
    const data = await api.register(form);
    localStorage.setItem("token", data.token);
    alert("Signup successful! Please log in.");
  } catch (error) {
    console.error("Signup error:", error);
    alert("An error occurred during signup. Please try again.");
  }
}

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" required 
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">phone</FieldLabel>
              <Input id="phone" type="text" placeholder="+254 70000000" required 
              value={form.phone}
              onChange={(e) => setForm({...form, phone: e.target.value})}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" placeholder="m@example.com" required 
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required 
              value={form.password}
              onChange={(e) => setForm({...form, password: e.target.value})}
              />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input id="confirm-password" type="password" required 
              value={form.confirmPassword}
              onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
              />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                {/* <Button variant="outline" type="button">
                  Sign up with Google
                </Button> */}
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="/sign-in">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
