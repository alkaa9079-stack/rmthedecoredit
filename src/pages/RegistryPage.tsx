import { useState } from "react";
import { CalendarIcon, Plus, Trash2 } from "lucide-react";
import { format } from "date-fns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";

interface RegistryEntry {
  id: string;
  name: string;
  occasion: string;
  date: Date;
}

const RegistryPage = () => {
  const [entries, setEntries] = useState<RegistryEntry[]>([]);
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("Birthday");
  const [date, setDate] = useState<Date>();
  useScrollFadeIn();

  const addEntry = () => {
    if (!name || !date) return;
    setEntries([...entries, { id: crypto.randomUUID(), name, occasion, date }]);
    setName("");
    setDate(undefined);
  };

  const removeEntry = (id: string) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="text-center mb-14 scroll-fade-in">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
                The Forget-Proof Scheduler
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
                Private Client Registry
              </h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                Never miss another birthday, anniversary, or milestone. Save your important dates and
                we'll remind you when it's time to begin curating.
              </p>
            </div>

            {/* Add form */}
            <div className="bg-card border border-gold-light rounded-lg p-6 mb-8 scroll-fade-in">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Add a Date</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                    Recipient Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Charlotte"
                    className="w-full text-sm px-3 py-2.5 border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                    Occasion
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full text-sm px-3 py-2.5 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Christmas</option>
                    <option>Valentine's Day</option>
                    <option>Mother's Day</option>
                    <option>Father's Day</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                    Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        className={cn(
                          "w-full flex items-center text-sm px-3 py-2.5 border border-border rounded-sm bg-background text-left focus:outline-none focus:ring-1 focus:ring-gold",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <button
                  onClick={addEntry}
                  disabled={!name || !date}
                  className="flex items-center justify-center gap-2 w-full text-xs uppercase tracking-[0.15em] py-3 bg-cta text-cta-foreground rounded-sm hover:bg-cta/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Plus className="w-4 h-4" /> Save to Registry
                </button>
              </div>
            </div>

            {/* Saved entries */}
            {entries.length > 0 && (
              <div className="scroll-fade-in">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Your Dates</h3>
                <div className="space-y-3">
                  {entries.map((entry) => (
                    <div
                      key={entry.id}
                      className="flex items-center justify-between bg-card border border-gold-light/50 rounded-lg px-5 py-4"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{entry.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {entry.occasion} · {format(entry.date, "d MMMM yyyy")}
                        </p>
                      </div>
                      <button
                        onClick={() => removeEntry(entry.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RegistryPage;
