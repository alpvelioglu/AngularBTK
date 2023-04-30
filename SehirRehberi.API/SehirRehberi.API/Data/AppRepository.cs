using Microsoft.EntityFrameworkCore;
using SehirRehberi.API.Models;

namespace SehirRehberi.API.Data
{
    public class AppRepository : IAppRepository
    {
        private readonly DataContext _context;
        public AppRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T t)
        {
            _context.Add(t);
        }

        public void Delete<T>(T t)
        {
            _context.Remove(t);
        }

        public List<City> GetCities()
        {
            return _context.Cities.Include(c => c.Photos).ToList();
        }

        public City GetCityById(int cityId)
        {
            return _context.Cities.Include(c => c.Photos).FirstOrDefault(c => c.Id == cityId);
        }

        public Photo GetPhoto(int id)
        {
            return _context.Photos.FirstOrDefault(p => p.Id == id);
        }

        public List<Photo> GetPhotosByCity(int cityId)
        {
            return _context.Photos.Where(p => p.CityId == cityId).ToList();
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
