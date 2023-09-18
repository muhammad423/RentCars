import { SignIn } from "@clerk/nextjs";
 
export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-full mb-10 w-full">

        <SignIn />
    </div>
        )
}