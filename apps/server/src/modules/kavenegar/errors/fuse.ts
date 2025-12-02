export class SoftFuse {
  private failures = 0;
  private openedAt = 0;

  constructor(
    private readonly threshold: number,
    private readonly cooldownMs: number,
  ) {}

  canPass(): boolean {
    const now = Date.now();
    if (this.failures >= this.threshold) {
      const stillCooling = now - this.openedAt < this.cooldownMs;
      return !stillCooling;
    }
    return true;
  }

  onSuccess(): void {
    this.failures = 0;
    this.openedAt = 0;
  }

  onFailure(): void {
    this.failures++;
    if (this.failures >= this.threshold) {
      this.openedAt = Date.now();
    }
  }
}
