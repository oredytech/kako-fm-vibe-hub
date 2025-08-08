import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Tag } from 'lucide-react';

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

interface CategoriesDialogProps {
  onCategorySelect?: (categoryId: number, categoryName: string) => void;
  selectedCategory?: number;
}

const CategoriesDialog: React.FC<CategoriesDialogProps> = ({ 
  onCategorySelect, 
  selectedCategory 
}) => {
  const [open, setOpen] = useState(false);

  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch('https://kakofm.net/wp-json/wp/v2/categories?per_page=50');
      if (!response.ok) throw new Error('Erreur lors du chargement des catégories');
      return response.json() as Promise<WordPressCategory[]>;
    },
  });

  const handleCategoryClick = (category: WordPressCategory) => {
    if (onCategorySelect) {
      onCategorySelect(category.id, category.name);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center space-x-2">
          <Tag className="h-4 w-4" />
          <span>Catégories</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Tag className="h-5 w-5" />
            <span>Catégories d'articles</span>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-kako-blue" />
              <span className="ml-2 text-gray-600">Chargement des catégories...</span>
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">
              Erreur lors du chargement des catégories
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {categories?.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  className={`p-4 text-left rounded-lg border transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-kako-blue/10 border-kako-blue'
                      : 'hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{category.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                  {category.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {category.description}
                    </p>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CategoriesDialog;