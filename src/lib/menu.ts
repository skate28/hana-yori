import type { MenuCategory, MenuItem } from "@/content/types";

export function visibleItem(item: MenuItem): boolean {
  return Boolean(item.name.trim()) && !item.placeholder;
}

/** Categories with a name and either real items or a description. Empty ones disappear. */
export function visibleCategories(menu: MenuCategory[]): MenuCategory[] {
  return menu.flatMap((category) => {
    if (!category.name.trim()) return [];
    const items = category.items.filter(visibleItem);
    if (items.length === 0 && !category.description?.trim()) return [];
    return [{ ...category, name: category.name.trim(), items }];
  });
}
