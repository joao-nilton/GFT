using Microsoft.EntityFrameworkCore;
using System;
namespace CursoMVC.Models
{
    public class Context:DbContext

    {
        public DbSet<Categoria> Categorias { get; set; }
      protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.useSqlServer(connectionString:@"Server(localdb))\mssqldb;Database = Cursomvc;Integrated Security=True"

        }
    }
}
