using ETicaretAPI.Application.Repositories.EntityRepository;
using ETicaretAPI.Domain.Entities;
using ETicaretAPI.Persistence.Contexts;

namespace ETicaretAPI.Persistence.Repositories.EntityRepository
{
    public class CustomerWriteRepository : WriteRepository<Customer>, ICustomerWriteRepository
    {
        public CustomerWriteRepository(ETicaretAPIDbContext context) : base(context)
        {
        }
    }
}