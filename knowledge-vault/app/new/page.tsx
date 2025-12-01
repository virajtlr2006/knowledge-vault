"use client"
import type { TechItem } from "@/lib/tech-data"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { NewKnowledgeAction } from "@/Action/Knowledge"
import { useRouter } from "next/navigation"
import { useCurrentUser } from "@/hook/hook"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const AddKnowledgePage = () => {
  const router = useRouter()
  const { email } = useCurrentUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TechItem>()

  const onsubmit = async (data: TechItem) => {
    const newdata = { ...data, email: email || "" }
    await NewKnowledgeAction(newdata)
    router.push("/knowledge")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <Header/>
      
      {/* HEADER */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border/40 py-9 shadow-sm">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center shadow-inner">
              <svg
                className="w-7 h-7 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-foreground tracking-tight">
                Add New Knowledge
              </h1>
              <p className="text-muted-foreground text-sm">
                Share valuable insights with the community
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="py-10">
        <div className="max-w-2xl mx-auto px-4">

          {/* FORM CARD */}
          <div className="p-8 rounded-xl border border-border/40 bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-300">
            <form onSubmit={handleSubmit(onsubmit)} className="space-y-7">

              {/* TITLE FIELD */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-foreground tracking-wide">
                  Knowledge Title
                </label>
                <Input
                  id="name"
                  {...register("name", { required: "Title is required" })}
                  placeholder="e.g., React Hooks Best Practices"
                  className="h-11 text-base focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                />
                {errors.name && (
                  <span className="text-sm text-destructive flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* DESCRIPTION FIELD */}
              <div className="space-y-2">
                <label htmlFor="desc" className="block text-sm font-semibold text-foreground tracking-wide">
                  Short Description
                </label>
                <textarea
                  id="desc"
                  {...register("desc", { required: "Description is required" })}
                  placeholder="Provide a brief summary of your knowledge..."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all resize-none"
                />
                {errors.desc && (
                  <span className="text-sm text-destructive flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    {errors.desc.message}
                  </span>
                )}
              </div>

              {/* IMAGE FIELD */}
              <div className="space-y-2">
                <label htmlFor="img" className="block text-sm font-semibold text-foreground tracking-wide">
                  Image URL
                </label>
                <Input
                  id="img"
                  {...register("img", { required: "Image URL is required" })}
                  placeholder="https://example.com/image.jpg"
                  className="h-11 text-base focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                  type="url"
                />
                {errors.img && (
                  <span className="text-sm text-destructive flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    {errors.img.message}
                  </span>
                )}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 pt-6 border-t border-border/40">
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-primary text-primary-foreground py-2.5 font-semibold hover:bg-primary/90 hover:shadow-lg transition-all"
                >
                  Publish Knowledge
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/knowledge")}
                  className="flex-1 rounded-lg bg-secondary/70 text-foreground py-2.5 font-semibold hover:bg-blue-100 hover:text-blue-700 hover:shadow-lg transition-all border border-border"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          {/* INFO BLOCKS */}
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="bg-secondary/40 rounded-xl p-4 border border-border/40 hover:border-blue-300 hover:bg-blue-50 transition-all">
              <div className="flex gap-3">
                <div className="text-blue-600 text-xl">📝</div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">Be Descriptive</h3>
                  <p className="text-xs text-muted-foreground mt-1">Write clear, helpful details</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/40 rounded-xl p-4 border border-border/40 hover:border-blue-300 hover:bg-blue-50 transition-all">
              <div className="flex gap-3">
                <div className="text-blue-600 text-xl">🖼️</div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">Add Images</h3>
                  <p className="text-xs text-muted-foreground mt-1">Images make knowledge more engaging</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/40 rounded-xl p-4 border border-border/40 hover:border-blue-300 hover:bg-blue-50 transition-all">
              <div className="flex gap-3">
                <div className="text-blue-600 text-xl">✨</div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">Make It Valuable</h3>
                  <p className="text-xs text-muted-foreground mt-1">Help others grow with your insights</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default AddKnowledgePage
