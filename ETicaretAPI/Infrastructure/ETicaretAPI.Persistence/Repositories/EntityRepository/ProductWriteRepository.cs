using ETicaretAPI.Application.Repositories.EntityRepository;
using ETicaretAPI.Domain.Entities;
using ETicaretAPI.Persistence.Contexts;

namespace ETicaretAPI.Persistence.Repositories.EntityRepository
{
    public class ProductWriteRepository : WriteRepository<Product>, IProductWriteRepository
    {
        public ProductWriteRepository(ETicaretAPIDbContext context) : base(context)
        {
        }
    }
}