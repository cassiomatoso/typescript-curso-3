export function logarTempoDeExecucao() {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args: Array<any>) {
            const tempo1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const tempo2 = performance.now();
            let divisor = 1000;

            console.log(`Método: ${propertyKey} - tempo de execução: ${(tempo2 - tempo1) / divisor} segundos`);

            retorno;
        };

        return descriptor;

    }

}
