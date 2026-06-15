import { useTranslation } from "../../../hooks/useTranslation";

export function Hero() {
  const { t } = useTranslation();

  return <section>{t.hero.title}</section>;
}
