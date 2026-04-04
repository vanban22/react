import { useState } from "react";
import { useStoryList } from "./useStoryList";
import { useUpdateStory } from "./useUpdateStory";

function UseUpdateList() {
    const { list, isLoading } = useStoryList();
    const { update } = useUpdateStory();

    const [editingId, setEditingId] = useState<number | null>(null);
    const [form, setForm] = useState<any>({});

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>

            {list.map((item: any) => (
                <div key={item.id} style={{ marginBottom: "20px" }}>
                    {editingId === item.id ? (
                        <>
                            <input
                                value={form.title}
                                onChange={(e) =>
                                    setForm({ ...form, title: e.target.value })
                                }
                                placeholder="Title"
                            />
                            <input
                                value={form.author}
                                onChange={(e) =>
                                    setForm({ ...form, author: e.target.value })
                                }
                                placeholder="Author"
                            />
                            <input
                                value={form.views}
                                onChange={(e) =>
                                    setForm({ ...form, views: Number(e.target.value) })
                                }
                                placeholder="Views"
                            />

                            <button
                                onClick={() => {
                                    update({ id: item.id, ...form });
                                    setEditingId(null);
                                }}
                            >
                                Lưu
                            </button>

                            <button onClick={() => setEditingId(null)}>
                                Hủy
                            </button>
                        </>
                    ) : (
                        <>
                            <h3>{item.title}</h3>
                            <p>{item.author}</p>
                            <p>{item.views}</p>

                            <button
                                onClick={() => {
                                    setEditingId(item.id);
                                    setForm({
                                        title: item.title,
                                        author: item.author,
                                        views: item.views,
                                        image: item.image,
                                    });
                                }}
                            >
                                Sửa
                            </button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default UseUpdateList;