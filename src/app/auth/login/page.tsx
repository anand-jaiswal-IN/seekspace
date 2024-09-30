import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="my-10 flex justify-center">
        <div>
      <Card className="max-w-sm">
        <h2 className="text-3xl font-extrabold underline">Login Here</h2>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Login</Button>
        </form>
        <p>
          Don't have account ?{" "}
          <Link href="/auth/register" className="text-blue-600">
            Register here
          </Link>
        </p>
      </Card>
    </div>
    </div>
  );
}
