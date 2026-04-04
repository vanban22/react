import { useState } from "react";
import { useCRUDStory } from "./useCRUDStory";

function StoryList() {
  const { list, isLoading, add, remove, update } = useCRUDStory();

  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<any>({
    title: "",
    author: "",
    views: 0,
    image: "",
  });

  if (isLoading) return <p>Loading</p>;

  return (
    <div>
      <button
        onClick={() =>
          add({
            title: "Truyện mới",
            author: "Nguyễn Văn A",
            views: 1000,
            image: "https://via.placeholder.com/150",
          })
        }
      >
        Thêm truyện
      </button>

      {list.map((item: any) => (
        <div key={item.id} style={{ marginTop: "20px" }}>
          {editingId === item.id ? (
            <>
              <input
                type="text"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                placeholder="Nhập tiêu đề"
              />
              <br />

              <input
                type="text"
                value={form.author}
                onChange={(e) =>
                  setForm({ ...form, author: e.target.value })
                }
                placeholder="Nhập tác giả"
              />
              <br />

              <input
                type="number"
                value={form.views}
                onChange={(e) =>
                  setForm({ ...form, views: Number(e.target.value) })
                }
                placeholder="Nhập lượt xem"
              />
              <br />

              <input
                type="text"
                value={form.image}
                onChange={(e) =>
                  setForm({ ...form, image: e.target.value })
                }
                placeholder="Nhập link ảnh"
              />
              <br />

              <button
                onClick={() => {
                  update({
                    id: item.id,
                    ...form,
                  });
                  setEditingId(null);
                }}
              >
                Lưu
              </button>

              <button onClick={() => setEditingId(null)}>Hủy</button>
            </>
          ) : (
            <>
              <h3>{item.title}</h3>
              <p>{item.author}</p>
              <p>{item.views}</p>
              <img src={item.image} alt="" width="100" />

              <br />
              <button onClick={() => remove(item.id)}>Xóa</button>

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

export default StoryList;