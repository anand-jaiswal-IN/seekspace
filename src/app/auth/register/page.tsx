import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="my-10 flex justify-center">
        <div>
      <Card className="max-w-sm">
        <h2 className="text-3xl font-extrabold underline">Register Here</h2>
        <form className="flex flex-col gap-4">
        <div>
            <div className="mb-2 block">
              <Label htmlFor="name1" value="Your Full Name" />
            </div>
            <TextInput
              id="name1"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
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
          <Button type="submit">Sign Up</Button>
        </form>
        <p>
          Already have a account ?{" "}
          <Link href="/auth/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </Card>
    </div>
    </div>
  );
}
