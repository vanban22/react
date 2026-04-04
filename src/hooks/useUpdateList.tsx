import { useStoryList } from "./useStoryList";
import { useUpdateStory } from "./useUpdateStory";

function UseUpdateList() {
  const { list, isLoading } = useStoryList();
  const { update } = useUpdateStory();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>

      {list.map((item: any) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.author}</p>
          <p>{item.views}</p>

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

export default UseUpdateList;