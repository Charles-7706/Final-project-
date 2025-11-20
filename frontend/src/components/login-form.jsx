import { cn } from "@/lib/utils"
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
import { useNavigate } from "react-router-dom"

export function LoginForm({
  className,
  ...props
}) {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const data = await api.login(form);
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        navigate('/');
      setForm({
        email: "",
        password: "",
      }
    );

    } catch (error) {
      setError(error)
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
    }}


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="m@example.com" required
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required 
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
                />
              </Field>
              <Field>
                <Button type="submit" >Login</Button>
                {/* <Button variant="outline" type="button">
                  Login with Google
                </Button> */}
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="/sign-up">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
