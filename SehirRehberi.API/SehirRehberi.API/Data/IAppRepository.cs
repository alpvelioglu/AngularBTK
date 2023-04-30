using SehirRehberi.API.Models;

namespace SehirRehberi.API.Data
{
    public interface IAppRepository
    {
        void Add<T>(T t);
        void Delete<T>(T t);
        bool SaveAll();
        List<City> GetCities();
        List<Photo> GetPhotosByCity(int cityId);
        City GetCityById(int cityId);
        Photo GetPhoto(int id);
    }
}
