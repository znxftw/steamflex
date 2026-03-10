import React from 'react';

interface SearchFormProps {
  url: string;
  setUrl: (url: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ url, setUrl, onSubmit }) => {
  return (
    <div className="search-container">
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="enter your steam profile url..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit" className="btn-generate">
          generate
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
