"use client";
import { Button } from "@sana/ui/components/button";
import { Input } from "@sana/ui/components/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

function TestPage() {
  const [token, setToken] = useState<string>("");
  const router = useRouter();
  const handleRedirect = () => {
    router.push(`https://ikc.shaparak.ir/iuiv3/IPG/Index/${token}`);
  };
  return (
    <div className="w-full flex py-[200px] justify-center items-center">
      <div>
        <form
          method="POST"
          action={`https://ikc.shaparak.ir/iuiv3/IPG/Index`}
        >
          <Input
            name="tokenIdentity"
            onChange={(e) => setToken(e.target.value)}
            value={token}
            style={{ direction: "ltr" }}
            className="w-[400px]"
            placeholder="TOKEN IDENTITY"
          />
          <div className="flex mt-4 ">
            <Button
              type="submit"
              className="w-full h-[40px]"
            >
              Redirect
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TestPage;
