const fetchData = async (date) => {
    try {
      const response = await fetch(`https://example.com/api/available-times?date=${date}`);
      const data = await response.json();
      return data.availableTimes;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  export default fetchData;