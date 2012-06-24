using System;
using System.Data;
using System.Linq;
using System.Linq.Expressions;
using System.Collections.Generic;
using ServiceStack.OrmLite;
using ServiceStack.Common;
using ServiceStack.Common.Web;
using ServiceStack.Common.Utils;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceInterface.Auth;
using ServiceStack.CacheAccess;
using ServiceStack.ServiceHost;
using ServiceStack.DesignPatterns.Model;
using Aicl.Colmetrik.Model.Types;
using Aicl.Colmetrik.Model.Operations;
using Aicl.Colmetrik.DataAccess;

namespace Aicl.Colmetrik.BusinessLogic
{
    public static partial class BL
    {
         public static Response<PedidoItem> Get(this PedidoItem request,Factory factory,
                                           IAuthSession authSession)
        {

            var data = factory.Execute(proxy=>{
                var visitor = ReadExtensions.CreateExpression<PedidoItem>();
                visitor.Where(r=>r.IdPedido==request.IdPedido);
                return proxy.Get(visitor);
            });
                        
            return new Response<PedidoItem>(){
                Data=data

            };
        }

    }
}

