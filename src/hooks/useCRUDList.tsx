import { useCRUDStory } from "./useCRUDStory";

function StoryList() {
  const { list, isLoading, add, remove, update } = useCRUDStory();

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
          <h3>{item.title}</h3>
          <p>{item.author}</p>
          <p>{item.views}</p>

          <button onClick={() => remove(item.id)}>Xóa</button>

          <button
            onClick={() =>
              update({
                id: item.id,
                title: item.title + " updated",
                author: item.author,
                views: item.views + 1,
                image: item.image,
              })
            }
          >
            Sửa
          </button>
        </div>
      ))}
    </div>
  );
}

export default StoryList;