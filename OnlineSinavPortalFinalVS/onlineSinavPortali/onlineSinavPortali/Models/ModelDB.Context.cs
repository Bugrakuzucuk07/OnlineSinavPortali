﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace onlineSinavPortali.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class DB01Entities : DbContext
    {
        public DB01Entities()
            : base("name=DB01Entities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Cevap> Cevap { get; set; }
        public virtual DbSet<Kategori> Kategori { get; set; }
        public virtual DbSet<Ogrenci> Ogrenci { get; set; }
        public virtual DbSet<Secenek> Secenek { get; set; }
        public virtual DbSet<Sinav> Sinav { get; set; }
        public virtual DbSet<Soru> Soru { get; set; }
    }
}
