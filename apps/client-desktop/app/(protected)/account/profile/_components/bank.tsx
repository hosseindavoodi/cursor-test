"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@sana/ui/components/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@sana/ui/components/form";
import { Input } from "@sana/ui/components/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MelatCard from "@sana/assets/banks/melat.svg";
import z from "zod";

function Bank() {
  const [editMode, setEditMode] = useState(false);

  const formSchema = z.object({
    cardNumber: z.string().max(16, { error: "شماره کارت 16 رقمی می باشد" }),
    shaba: z.string().max(24, { error: "شماره شبا 24 رقمی می باشد" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: "",
      shaba: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-full p-[30px] relative bg-white  flex flex-col gap-y-[40px] rounded-[25px] border border-gray-300">
      <p className="font-semibold text-[24px]">اطلاعات حساب بانکی</p>

      <div className="w-full flex justify-between">
        <div className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-y-[32px]"
            >
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>شماره کارت</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[524px] "
                        style={{ direction: "ltr" }}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>شماره شبا</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[524px]"
                        style={{ direction: "ltr" }}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                onClick={() => {
                  if (!editMode) {
                    setEditMode(true);
                  }
                }}
                className="absolute left-[30px] top-[30px] h-[44px] rounded-full"
                type={editMode ? "submit" : "button"}
                variant={editMode ? "primary" : "outline"}
              >
                {editMode ? "ذخیره اطلاعات" : "ویرایش اطلاعات"}
              </Button>
            </form>
          </Form>
        </div>

        <div>
          <MelatCard />
        </div>
      </div>
    </div>
  );
}

export default Bank;
