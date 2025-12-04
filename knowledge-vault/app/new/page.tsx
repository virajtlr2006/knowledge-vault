"use client"
import type { TechItem } from "@/lib/tech-data"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { NewKnowledgeAction } from "@/Action/Knowledge"
import { useRouter } from "next/navigation"
import { useCurrentUser } from "@/hook/hook"
import { Footer } from "@/components/footer"
import { Header } from "@/components/ui/header"

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
    <div>
      <Header/>
      
      <div>
        <div>
          <div>
            <div>
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </div>

            <div>
              <h1>Add New Knowledge</h1>
              <p>Share valuable insights with the community</p>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div>

          <div>
            <form onSubmit={handleSubmit(onsubmit)}>

              <div>
                <label htmlFor="name">
                  Knowledge Title
                </label>
                <Input
                  id="name"
                  {...register("name", { required: "Title is required" })}
                  placeholder="e.g., React Hooks Best Practices"
                />
                {errors.name && (
                  <span>
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="desc">
                  Short Description
                </label>
                <textarea
                  id="desc"
                  {...register("desc", { required: "Description is required" })}
                  placeholder="Provide a brief summary of your knowledge..."
                  rows={3}
                />
                {errors.desc && (
                  <span>
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    {errors.desc.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="img">
                  Image URL
                </label>
                <Input
                  id="img"
                  {...register("img", { required: "Image URL is required" })}
                  placeholder="https://example.com/image.jpg"
                  type="url"
                />
                {errors.img && (
                  <span>
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    {errors.img.message}
                  </span>
                )}
              </div>

              <div>
                <button type="submit">
                  Publish Knowledge
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/knowledge")}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          <div>
            <div>
              <div>
                <div>
                  <h3>Be Descriptive</h3>
                  <p>Write clear, helpful details</p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <h3>Add Images</h3>
                  <p>Images make knowledge more engaging</p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <h3>Make It Valuable</h3>
                  <p>Help others grow with your insights</p>
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
