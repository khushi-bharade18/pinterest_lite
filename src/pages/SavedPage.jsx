import { useDispatch, useSelector } from "react-redux";
import SavedCard from "../components/SavedCard";
import { removeFromCollection } from "../features/usersSlice";

export default function SavedPage() {
  const dispatch = useDispatch();

  const { currUser } = useSelector((state) => state.users);

  const savedItems = currUser?.collection || [];

  return (
    <div className="w-full px-4 pt-32 md:pt-24 pb-8">
      <div className="mx-auto">
        {savedItems.length === 0 ? (
          <div className="flex flex-col justify-center items-center py-24">
            <h2 className="text-2xl font-semibold text-gray-700">
              No Saved Items
            </h2>

            <p className="mt-2 text-gray-500">
              Save your favourite photos and stickers.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {savedItems.map((item) => (
              <SavedCard key={item.id} {...item} onRemove={() => dispatch(removeFromCollection(item.id))} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
