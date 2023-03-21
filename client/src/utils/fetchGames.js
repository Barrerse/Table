  // Fetch games data from API on component mount
  useEffect(() => {
    const fetchGames = async () => {
      const gamesData = await searchGamesAPI();
      const games = gamesData.map((game) => ({
        id: game.id,
        title: game.name,
        releaseDate: game.year_published,
        price: game.price,
        image: game.image_url,
      }));
      setGames(games);
    };
    fetchGames();
  }, []);

  if (searchGames.length < 1) {
    return (
      <h1 className="text-white font-bold text-center mt-10">Loading...</h1>
    );
  }

  /// can use this in the future to sort the games