import "./globals.css";
import { CurrentEngineProvider } from "./gptContexts/chatEngine";
import { SelectedChatProvider } from "./gptContexts/selectedChat";
import { ChatLogProvider } from "./gptContexts/chatLog";
import { ChatLoading } from "./gptContexts/loading";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <CurrentEngineProvider>
          <ChatLogProvider>
            <ChatLoading>
              <SelectedChatProvider>
                <body>
                  {children}
                </body>
              </SelectedChatProvider>
            </ChatLoading>
          </ChatLogProvider>
        </CurrentEngineProvider>
      </UserProvider>
    </html>
  );
}
