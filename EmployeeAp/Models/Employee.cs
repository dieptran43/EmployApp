using System;

namespace EmployeeAp.Models;
public class Employee
{
    public int Id { get; set; }
    public string FullName { get; set; }
    public string Avatar { get; set; }
    public DateTime Birthday { get; set; }
    public decimal Salary { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime UpdateDate { get; set; }
}