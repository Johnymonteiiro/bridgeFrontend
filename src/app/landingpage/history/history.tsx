import { NoResultCard } from "@/components/card/card";
import { ResultCard } from "@/components/card/result_card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GetData } from "@/service/fetch";
import { DataTypes } from "@/types/types";
import { History as HistoryIcon } from "lucide-react";

export default async function History() {
  const data: DataTypes[] = await GetData();

  console.log(data);

  return (
    <>
      <div className="w-auto mt-11">
        <div className="flex items-center mb-4">
          <HistoryIcon className="mr-3" />
          <span>History :</span>
        </div>
        {data.length > 0 ? (
          <div className="grid gap-2 h-96 p-8">
            <ScrollArea>
              {data.map((item, index) => (
                <ResultCard
                  key={index}
                  type="history"
                  length={item.prime_list.length}
                  data={item}
                />
              ))}
            </ScrollArea>
          </div>
        ) : (
          <NoResultCard />
        )}
      </div>
    </>
  );
}