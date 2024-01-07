import _ from "lodash";

export function paginate (item, pageNumber , pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(item)
  .slice(startIndex)
  .take(pageSize)
  .value();
}