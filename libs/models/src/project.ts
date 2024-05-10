export interface IProject {
  title?: string;
  isShowRole?: boolean;
  role?: string;
  isShowCompany?: boolean;
  company?: string;
  isShowLocation?: boolean;
  location?: string;
  isShowUrl?: boolean;
  url?: string;
  isShowDate?: boolean;
  fromMonth?: string;
  fromYear?: string;
  toMonth?: string;
  toYear?: string;
  untilNow?: boolean;
  isShowPoints?: boolean;
  points?: string[];
}

export class Project {
  constructor(private input: Partial<IProject>) {}

  getTitle(): string | undefined {
    return this.input.title;
  }

  setTitle(title: string): void {
    this.input.title = title;
  }

  getIsShowRole(): boolean | undefined {
    return this.input.isShowRole;
  }

  getRole(): string | undefined {
    return this.input.role;
  }

  getIsShowCompany(): boolean | undefined {
    return this.input.isShowCompany;
  }

  getCompany(): string | undefined {
    return this.input.company;
  }

  getIsShowLocation(): boolean | undefined {
    return this.input.isShowLocation;
  }

  getLocation(): string | undefined {
    return this.input.location;
  }

  getIsShowUrl(): boolean | undefined {
    return this.input.isShowUrl;
  }

  getUrl(): string | undefined {
    return this.input.url;
  }

  getIsShowDate(): boolean | undefined {
    return this.input.isShowDate;
  }

  getFromMonth(): string | undefined {
    return this.input.fromMonth;
  }

  getFromYear(): string | undefined {
    return this.input.fromYear;
  }

  getToMonth(): string | undefined {
    return this.input.toMonth;
  }

  getToYear(): string | undefined {
    return this.input.toYear;
  }

  getUntilNow(): boolean | undefined {
    return this.input.untilNow;
  }

  getIsShowPoints(): boolean | undefined {
    return this.input.isShowPoints;
  }

  getPoints(): string[] | undefined {
    return this.input.points;
  }
}