export interface Body {
  id: string;
  englishName: string;
  polarRadius: string;
}

export interface BodyResponse {
  bodies: Body[];
}
