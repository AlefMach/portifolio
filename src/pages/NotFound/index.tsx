import { useTranslation } from "../../hooks/useTranslation";

export default function NotFound() {
  const { t } = useTranslation();

  return <div>{t.notFound.title}</div>;
}
