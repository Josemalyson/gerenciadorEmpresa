export class Socio {

    private id: number;
    private nome: string;
    private sobreNome: string;
    private cpf: string;
    private email: string;

    constructor() {

    }

    /**
     * setId
     */
    public setId(id: number): void {
        this.id = id;
    }

    /**
     * getId
     */
    public getNome(): string {
        return this.nome;
    }

    /**
    * setId
    */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * getId
     */
    public getSobreNome(): string {
        return this.sobreNome;
    }

    /**
    * setId
    */
    public setSobreNome(sobreNome: string): void {
        this.sobreNome = sobreNome;
    }

    /**
     * getId
     */
    public getCpf(): string {
        return this.cpf
    }

    /**
    * setId
    */
    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    /**
     * getId
     */
    public getEmail(): string {
        return this.email;
    }


    /**
    * setId
    */
    public setEmail(email: string): void {
        this.email = email;
    }

    /**
     * eqauls
     */
    public equals(socio: Socio): boolean {
        return this === socio;
    }
}
