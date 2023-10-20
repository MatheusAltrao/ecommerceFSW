import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { LayoutPanelLeft } from "lucide-react";
import CategoryItem from "./components/categoryItem";

const Catalog = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="px-8 py-5">
      <Badge
        variant="outline"
        className="  flex h-8 w-36 items-center justify-center gap-2 rounded-2xl border-2 border-primary px-3 py-2 uppercase"
      >
        <LayoutPanelLeft size={16} />
        CATÁLOGO
      </Badge>

      <div className="mt-8 flex items-center justify-center  ">
        <div className="grid w-full grid-cols-2 gap-8">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
