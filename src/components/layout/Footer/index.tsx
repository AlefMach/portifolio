import { useTranslation } from "../../../hooks/useTranslation";

export function Footer() {
  const { t } = useTranslation();

  return <footer>{t.footer.title}</footer>;
}
