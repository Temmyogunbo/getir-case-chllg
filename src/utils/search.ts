export const search =
  (searchValue: string, key?: string) => (searchBox: string[]) => {
    if (!searchValue) return [];

    return searchBox.map((item) => {
      if (key) {
        if (item.toLowerCase().includes(searchValue.toLowerCase())) return item;
      }
      if (item.toLowerCase().includes(searchValue.toLowerCase())) return item;
    });
  };
