"use client";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendEmail } from "@/components/send-email";
import { Send } from "lucide-react";
import { ToastProvider } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function ContactForm() {
    const { toast } = useToast();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        const formData = new FormData(e.currentTarget); // Get form data

        try {
            // Call the Server Action to send the email
            const result = await SendEmail(formData);
            if (result.success) {
                // Trigger success toast
                toast({
                    title: "Message Sent",
                    description: "Your message has been sent successfully.",
                });
                router.push("/");
            }
        } catch (error) {
            // Trigger error toast
            toast({
                title: "Error",
                description: "Failed to send the message. Please try again.",
                variant: "destructive",
            });
        }
    };

    return (
        <ToastProvider>
            <Card className="w-full max-w-2xl mx-auto py-5 bg-white/1 backdrop-blur-md border-0 rounded-xl">
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-2 px-3">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col items-start space-y-1">
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full"
                                />
                            </div>
                            <div className="flex flex-col items-start space-y-1">
                                <Input
                                    type="email"
                                    id="email"
                                    name="SenderEmail"
                                    required
                                    placeholder="Personal email"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-start space-y-1">
                            <select
                                id="subject"
                                name="subject"
                                required
                                className="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                                <option value="">Select a subject</option>
                                <option value="General">General Inquiry</option>
                                <option value="schedule">Schedule A Meeting</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="flex flex-col items-start space-y-1">
                            <Textarea
                                id="message"
                                placeholder="Leave me a short message, feel free to drop your phone number if you prefer!"
                                name="message"
                                required
                                className="w-full min-h-[150px]"
                            />
                        </div>
                    </CardContent>
                    <div className="flex justify-center items-center py-0">
                        <CardFooter>
                            <Button type="submit" variant={"outline"} className="w-full">
                                <Send className="w-5 h-5 mr-2" />
                                Send Message
                            </Button>
                        </CardFooter>
                    </div>
                </form>
            </Card>
        </ToastProvider>
    );
}
