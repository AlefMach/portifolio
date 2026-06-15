import TranslateIcon from "@mui/icons-material/Translate";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

import { useTranslation } from "../../../hooks/useTranslation";
import { type Language } from "../../../i18n";

export function LanguageToggle() {
  const { language, setLanguage, t } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <Select
      aria-label={t.common.language}
      displayEmpty
      onChange={handleChange}
      size="small"
      value={language}
      startAdornment={
        <TranslateIcon
          fontSize="small"
          sx={{ color: "text.secondary", mr: 0.75 }}
        />
      }
      sx={{
        borderRadius: 2,
        color: "text.primary",
        height: 40,
        minWidth: 92,
        ".MuiSelect-select": {
          alignItems: "center",
          display: "flex",
          py: 0,
        },
      }}
    >
      <MenuItem value="pt">{t.common.portuguese}</MenuItem>
      <MenuItem value="en">{t.common.english}</MenuItem>
    </Select>
  );
}
