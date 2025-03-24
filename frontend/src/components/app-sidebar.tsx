import { Home, LogOut, Settings, Users } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import TournamentBracket from "./icons/tournament-bracket";
import Standings from "./icons/standings";
import { Link, useLocation, useRouter } from "@tanstack/react-router";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";

const items = [
  {
    title: "Home",
    url: "/app",
    icon: Home,
  },
  {
    title: "My Brackets",
    url: "/app/my-brackets",
    icon: TournamentBracket,
  },
  {
    title: "Groups",
    url: "/app/groups",
    icon: Users,
  },
  {
    title: "Standings",
    url: "/app/standings",
    icon: Standings,
  },
  {
    title: "Settings",
    url: "/app/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const router = useRouter();
  const location = useLocation();

  const onSignOut = async () => {
    const { error } = await signOut();
    if (error?.message) {
      toast.error(`Unable to sign out: ${error.message}`);
      return;
    }

    router.navigate({
      to: "/auth/sign-in",
      reloadDocument: true, // force reload to clear auth session
    });
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>react-bracket</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.url === location.pathname}
                  >
                    <Link to={item.url} href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={onSignOut}>
              <LogOut /> Sign Out
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
