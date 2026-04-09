import { useState } from "react";
import { CalendarIcon, Plus, Trash2, Clock } from "lucide-react";
import { format, differenceInDays, isPast, addYears } from "date-fns";
import PageSpinner from "@/components/PageSpinner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import { useAuth } from "@/hooks/useAuth";
import AuthModal from "@/components/AuthModal";

const RegistryPage = () => {
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("Birthday");
  const [date, setDate] = useState<Date>();
  const queryClient = useQueryClient();
  useScrollFadeIn();

  const { data: milestones = [], isLoading } = useQuery({
    queryKey: ["milestones"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("milestones")
        .select("*")
        .order("date", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const addMutation = useMutation({
    mutationFn: async () => {
      if (!name || !date) return;
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Please sign in first.");
      const { error } = await supabase.from("milestones").insert({
        name,
        occasion,
        date: format(date, "yyyy-MM-dd"),
        user_id: user.id,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["milestones"] });
      setName("");
      setDate(undefined);
      toast({ title: "Saved", description: "Milestone added to your registry." });
    },
    onError: () => {
      toast({ title: "Error", description: "Could not save milestone.", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("milestones").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["milestones"] });
    },
  });

  const getDaysUntil = (dateStr: string) => {
    let target = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    // For recurring dates, find next occurrence
    while (isPast(target) && differenceInDays(today, target) > 0) {
      target = addYears(target, 1);
    }
    const days = differenceInDays(target, today);
    if (days === 0) return "Today!";
    if (days === 1) return "Tomorrow";
    return `${days} days to go`;
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
                  onClick={() => addMutation.mutate()}
                  disabled={!name || !date || addMutation.isPending}
                  className="flex items-center justify-center gap-2 w-full text-xs uppercase tracking-[0.15em] py-3 bg-cta text-cta-foreground rounded-sm hover:bg-cta/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Plus className="w-4 h-4" /> {addMutation.isPending ? "Saving…" : "Save to Registry"}
                </button>
              </div>
            </div>

            {/* Milestones list */}
            <div className="scroll-fade-in">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">My Milestones</h3>
              {isLoading ? (
                <PageSpinner />
              ) : milestones.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8 border border-dashed border-border rounded-lg">
                  No milestones yet. Add your first date above.
                </p>
              ) : (
                <div className="space-y-3">
                  {milestones.map((m) => (
                    <div
                      key={m.id}
                      className="flex items-center justify-between bg-card border border-gold-light/50 rounded-lg px-5 py-4"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{m.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {m.occasion} · {format(new Date(m.date), "d MMMM yyyy")}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-xs font-medium text-primary">
                          <Clock className="w-3.5 h-3.5" />
                          {getDaysUntil(m.date)}
                        </span>
                        <button
                          onClick={() => deleteMutation.mutate(m.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="Remove"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RegistryPage;
