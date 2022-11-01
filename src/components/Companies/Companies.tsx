import { Definitions, CssStyleProps } from "../../Interfaces/Types";

interface CompanyProp {
  companies: Definitions[];
  ulElementStyle: CssStyleProps;
  liElementStyle: CssStyleProps;
}

export const Companies = ({
  companies,
  ulElementStyle,
  liElementStyle,
}: CompanyProp) => {
  return (
    <ul style={{ ...ulElementStyle }}>
      {companies.map((value) => {
        return (
          <li key={value.id} style={{ ...liElementStyle }}>
            {value.company}
          </li>
        );
      })}
    </ul>
  );
};
