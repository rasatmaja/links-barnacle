class LinksModels {
  id!: number;
  section?: string;
  name: string;
  description?: string;
  color?: string;

  constructor(data: Partial<LinksModels>) {
    this.id = data.id || 0;
    this.name = data.name || "";
    this.section = data.section;
    this.description = data.description || "";
    this.color = data.color || "";
  }
}

export default LinksModels;
