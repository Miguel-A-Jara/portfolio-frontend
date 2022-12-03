export default interface ITechnologyInfo {
  tech_info_id: number;
  title:        string;
  description:  string;
  locale:       string;
  images:       Image[];
}

export interface Image {
  alternative_text: string;
  width:            number;
  height:           number;
  url:              string;
}
