type Nullable<T> = { [P in keyof T]?: T[P] | null };

export type TeamMember = Nullable<{
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  skills: MemberSkill[];
  avatar: string;
  bio: string;
}>;
export type MemberSkill = string;
export type ViewTypes = "Grid" | "List";
