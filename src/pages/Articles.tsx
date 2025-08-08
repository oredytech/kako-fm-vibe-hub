
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, ExternalLink, Loader2, Tag, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoriesDialog from '@/components/CategoriesDialog';

interface WordPressPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  slug: string;
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>('');

  const { data: articles, isLoading, error } = useQuery({
    queryKey: ['articles', page, searchTerm, selectedCategory],
    queryFn: async () => {
      let url = `https://kakofm.net/wp-json/wp/v2/posts?_embed&per_page=12&page=${page}`;
      if (searchTerm) {
        url += `&search=${encodeURIComponent(searchTerm)}`;
      }
      if (selectedCategory) {
        url += `&categories=${selectedCategory}`;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error('Erreur lors du chargement des articles');
      return response.json() as Promise<WordPressPost[]>;
    },
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
  };

  const handleCategorySelect = (categoryId: number, categoryName: string) => {
    setSelectedCategory(categoryId);
    setSelectedCategoryName(categoryName);
    setPage(1);
  };

  const clearCategory = () => {
    setSelectedCategory(null);
    setSelectedCategoryName('');
    setPage(1);
  };

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Articles</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos derniers articles sur l'actualité, la culture et la société
          </p>
        </div>

        {/* Search & Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Rechercher un article..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button type="submit" className="gradient-kako text-white">
                  Rechercher
                </Button>
                <CategoriesDialog
                  onCategorySelect={handleCategorySelect}
                  selectedCategory={selectedCategory || undefined}
                />
              </div>
              
              {/* Active Filters */}
              {selectedCategory && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Filtre actif:</span>
                  <Badge variant="secondary" className="flex items-center gap-2">
                    <Tag className="h-3 w-3" />
                    {selectedCategoryName}
                    <button
                      type="button"
                      onClick={clearCategory}
                      className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Articles Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-kako-blue" />
            <span className="ml-2 text-gray-600">Chargement des articles...</span>
          </div>
        ) : error ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-red-600 mb-4">Erreur lors du chargement des articles</p>
              <Button onClick={() => window.location.reload()}>
                Réessayer
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {articles?.map((article) => (
                <Card key={article.id} className="hover-lift overflow-hidden">
                  {article._embedded?.['wp:featuredmedia']?.[0] && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={article._embedded['wp:featuredmedia'][0].source_url}
                        alt={article._embedded['wp:featuredmedia'][0].alt_text || article.title.rendered}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 line-clamp-2">
                      {article.title.rendered}
                    </h3>
                    
                    {/* Categories */}
                    {article._embedded?.['wp:term']?.[0] && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article._embedded['wp:term'][0].map((category) => (
                          <Badge 
                            key={category.id} 
                            variant="outline" 
                            className="text-xs bg-kako-blue/10 text-kako-blue border-kako-blue/20"
                          >
                            {category.name}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <div 
                      className="text-gray-600 text-sm mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ 
                        __html: article.excerpt.rendered.replace(/<[^>]*>/g, '') 
                      }}
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-500 space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        asChild
                        className="flex items-center space-x-1"
                      >
                        <Link to={`/article/${article.slug}`}>
                          <span>Lire plus</span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {articles && articles.length === 12 && (
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                >
                  Page précédente
                </Button>
                <span className="flex items-center px-4 py-2 text-gray-600">
                  Page {page}
                </span>
                <Button
                  variant="outline"
                  onClick={() => setPage(page + 1)}
                  disabled={articles.length < 12}
                >
                  Page suivante
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Articles;
