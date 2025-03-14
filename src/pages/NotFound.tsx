
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="glass-card p-12 max-w-xl mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-primary">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-3">{t("notFound.title")}</h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t("notFound.description")}
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-white">
          <Link to="/" className="inline-flex items-center">
            <ArrowLeft size={18} className="mr-2" />
            {t("notFound.button")}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
