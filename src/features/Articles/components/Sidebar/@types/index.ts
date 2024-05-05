export interface SidebarItem {
  label: string;
  value: string;
}

export interface SidebarProps {
  items: SidebarItem[];
  queryAPI?: string;
}
